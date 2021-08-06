import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeDeleteManyMutation = mutationField(
  'deleteManyOpportunityType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.opportunityType.deleteMany({ where } as any)
    },
  },
)
