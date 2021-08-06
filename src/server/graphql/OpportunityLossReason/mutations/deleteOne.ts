import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonDeleteOneMutation = mutationField(
  'deleteOneOpportunityLossReason',
  {
    type: 'OpportunityLossReason',
    args: {
      where: nonNull('OpportunityLossReasonWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.opportunityLossReason.delete({
        where,
        ...select,
      })
    },
  },
)
