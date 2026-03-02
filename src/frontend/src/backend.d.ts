import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SiteStats {
    yearsOfExperience: bigint;
    clientsServed: bigint;
    teamMembers: bigint;
    projectsCompleted: bigint;
}
export interface BlogPost {
    title: string;
    date: Time;
    author: string;
    excerpt: string;
    category: string;
}
export interface AuditStep {
    title: string;
    description: string;
    stepNumber: bigint;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface TeamMember {
    bio: string;
    name: string;
    role: string;
}
export interface Service {
    title: string;
    icon: string;
    description: string;
}
export interface Project {
    title: string;
    description: string;
    category: string;
}
export interface backendInterface {
    addAuditStep(title: string, description: string, stepNumber: bigint): Promise<void>;
    addBlogPost(title: string, excerpt: string, author: string, date: Time, category: string): Promise<void>;
    addProject(title: string, category: string, description: string): Promise<void>;
    addService(title: string, description: string, icon: string): Promise<void>;
    addTeamMember(name: string, role: string, bio: string): Promise<void>;
    getAllAuditSteps(): Promise<Array<AuditStep>>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllProjects(): Promise<Array<Project>>;
    getAllServices(): Promise<Array<Service>>;
    getAllTeamMembers(): Promise<Array<TeamMember>>;
    getSiteStats(): Promise<SiteStats>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updateSiteStats(projectsCompleted: bigint, clientsServed: bigint, yearsOfExperience: bigint, teamMembers: bigint): Promise<void>;
}
