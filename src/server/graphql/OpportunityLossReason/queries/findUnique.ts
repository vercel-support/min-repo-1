import { queryField, nonNull } from 'nexus'

export const OpportunityLossReasonFindUniqueQuery = queryField(
  'findUniqueOpportunityLossReason',
  {
    type: 'OpportunityLossReason',
    args: {
      where: nonNull('OpportunityLossReasonWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.opportunityLossReason.findUnique({
        where,
        ...select,
      })
    },
  },
)
