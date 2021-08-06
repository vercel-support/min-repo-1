import { mutationField, nonNull } from 'nexus'

export const OpportunityDeleteManyMutation = mutationField(
  'deleteManyOpportunity',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.opportunity.deleteMany({ where } as any)
    },
  },
)
