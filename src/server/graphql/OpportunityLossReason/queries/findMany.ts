import { queryField, nonNull, list } from 'nexus'

export const OpportunityLossReasonFindManyQuery = queryField(
  'findManyOpportunityLossReason',
  {
    type: nonNull(list(nonNull('OpportunityLossReason'))),
    args: {
      where: 'OpportunityLossReasonWhereInput',
      orderBy: list('OpportunityLossReasonOrderByInput'),
      cursor: 'OpportunityLossReasonWhereUniqueInput',
      distinct: 'OpportunityLossReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityLossReason.findMany({
        ...args,
        ...select,
      })
    },
  },
)
