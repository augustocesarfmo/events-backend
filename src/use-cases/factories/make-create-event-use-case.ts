import { PrismaEventsRepository } from "../../repositories/prisma/prisma-events-repository";
import { CreateEventUseCase } from "../events/create-event";

export function makeCreateEventUseCase() {
  const prismaEventsRepository = new PrismaEventsRepository();
  const useCase = new CreateEventUseCase(prismaEventsRepository);

  return useCase;
}
