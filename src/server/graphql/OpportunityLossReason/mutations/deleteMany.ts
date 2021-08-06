import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonDeleteManyMutation = mutationField(
  'deleteManyOpportunityLossReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityLossReasonWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.opportunityLossReason.deleteMany({ where } as any)
    },
  },
)
