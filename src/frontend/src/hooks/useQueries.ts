import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  AuditStep,
  BlogPost,
  Project,
  Service,
  SiteStats,
  TeamMember,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllTeamMembers() {
  const { actor, isFetching } = useActor();
  return useQuery<TeamMember[]>({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTeamMembers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllProjects() {
  const { actor, isFetching } = useActor();
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSiteStats() {
  const { actor, isFetching } = useActor();
  return useQuery<SiteStats>({
    queryKey: ["siteStats"],
    queryFn: async () => {
      if (!actor) {
        return {
          projectsCompleted: BigInt(250),
          clientsServed: BigInt(180),
          yearsOfExperience: BigInt(12),
          teamMembers: BigInt(35),
        };
      }
      return actor.getSiteStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllAuditSteps() {
  const { actor, isFetching } = useActor();
  return useQuery<AuditStep[]>({
    queryKey: ["auditSteps"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllAuditSteps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, message);
    },
  });
}
