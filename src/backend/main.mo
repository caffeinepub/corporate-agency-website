import Text "mo:core/Text";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  // --- Types ---
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Project = {
    title : Text;
    category : Text;
    description : Text;
  };

  type BlogPost = {
    title : Text;
    excerpt : Text;
    author : Text;
    date : Time.Time;
    category : Text;
  };

  type TeamMember = {
    name : Text;
    role : Text;
    bio : Text;
  };

  type Service = {
    title : Text;
    description : Text;
    icon : Text;
  };

  type AuditStep = {
    title : Text;
    description : Text;
    stepNumber : Nat;
  };

  type SiteStats = {
    projectsCompleted : Nat;
    clientsServed : Nat;
    yearsOfExperience : Nat;
    teamMembers : Nat;
  };

  // --- Comparison Modules ---
  module AuditStep {
    public func compare(a : AuditStep, b : AuditStep) : Order.Order {
      Nat.compare(a.stepNumber, b.stepNumber);
    };
  };

  module BlogPost {
    public func compare(a : BlogPost, b : BlogPost) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  module Project {
    public func compare(a : Project, b : Project) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  module Service {
    public func compare(a : Service, b : Service) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  module TeamMember {
    public func compare(a : TeamMember, b : TeamMember) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  // --- Storage ---
  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();
  let projects = Map.empty<Text, Project>();
  let blogPosts = Map.empty<Text, BlogPost>();
  let teamMembers = Map.empty<Text, TeamMember>();
  let services = Map.empty<Text, Service>();
  let auditSteps = Map.empty<Nat, AuditStep>();
  var siteStats : SiteStats = {
    projectsCompleted = 0;
    clientsServed = 0;
    yearsOfExperience = 0;
    teamMembers = 0;
  };

  // --- Contact Form Functionality ---
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
    };
    contactSubmissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };

  // --- Portfolio Functionality ---
  public shared ({ caller }) func addProject(title : Text, category : Text, description : Text) : async () {
    if (projects.containsKey(title)) { Runtime.trap("Project with this title already exists") };
    let project : Project = {
      title;
      category;
      description;
    };
    projects.add(title, project);
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  // --- Blog Functionality ---
  public shared ({ caller }) func addBlogPost(title : Text, excerpt : Text, author : Text, date : Time.Time, category : Text) : async () {
    if (blogPosts.containsKey(title)) { Runtime.trap("Blog post with this title already exists") };
    let post : BlogPost = {
      title;
      excerpt;
      author;
      date;
      category;
    };
    blogPosts.add(title, post);
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  // --- Team Functionality ---
  public shared ({ caller }) func addTeamMember(name : Text, role : Text, bio : Text) : async () {
    if (teamMembers.containsKey(name)) { Runtime.trap("Team member with this name already exists") };
    let member : TeamMember = {
      name;
      role;
      bio;
    };
    teamMembers.add(name, member);
  };

  public query ({ caller }) func getAllTeamMembers() : async [TeamMember] {
    teamMembers.values().toArray().sort();
  };

  // --- Services Functionality ---
  public shared ({ caller }) func addService(title : Text, description : Text, icon : Text) : async () {
    if (services.containsKey(title)) { Runtime.trap("Service with this title already exists") };
    let service : Service = {
      title;
      description;
      icon;
    };
    services.add(title, service);
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray().sort();
  };

  // --- Audit Functionality ---
  public shared ({ caller }) func addAuditStep(title : Text, description : Text, stepNumber : Nat) : async () {
    if (auditSteps.containsKey(stepNumber)) { Runtime.trap("Audit step with this number already exists") };
    let step : AuditStep = {
      title;
      description;
      stepNumber;
    };
    auditSteps.add(stepNumber, step);
  };

  public query ({ caller }) func getAllAuditSteps() : async [AuditStep] {
    auditSteps.values().toArray().sort();
  };

  // --- Stats Functionality ---
  public query ({ caller }) func getSiteStats() : async SiteStats {
    siteStats;
  };

  public shared ({ caller }) func updateSiteStats(projectsCompleted : Nat, clientsServed : Nat, yearsOfExperience : Nat, teamMembers : Nat) : async () {
    siteStats := {
      projectsCompleted;
      clientsServed;
      yearsOfExperience;
      teamMembers;
    };
  };
};
