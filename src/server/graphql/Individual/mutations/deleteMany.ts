import { mutationField, nonNull } from 'nexus'

export const IndividualDeleteManyMutation = mutationField(
  'deleteManyIndividual',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'IndividualWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.individual.deleteMany({ where } as any)
    },
  },
)
