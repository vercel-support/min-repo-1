import { queryField, list } from 'nexus'

export const OpportunityLossReasonFindFirstQuery = queryField(
  'findFirstOpportunityLossReason',
  {
    type: 'OpportunityLossReason',
    args: {
      where: 'OpportunityLossReasonWhereInput',
      orderBy: list('OpportunityLossReasonOrderByInput'),
      cursor: 'OpportunityLossReasonWhereUniqueInput',
      distinct: 'OpportunityLossReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityLossReason.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
