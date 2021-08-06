import { queryField, list } from 'nexus'

export const OpportunityLossReasonAggregateQuery = queryField(
  'aggregateOpportunityLossReason',
  {
    type: 'AggregateOpportunityLossReason',
    args: {
      where: 'OpportunityLossReasonWhereInput',
      orderBy: list('OpportunityLossReasonOrderByInput'),
      cursor: 'OpportunityLossReasonWhereUniqueInput',
      distinct: 'OpportunityLossReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityLossReason.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
