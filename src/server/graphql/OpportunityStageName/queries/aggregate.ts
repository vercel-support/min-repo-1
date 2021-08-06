import { queryField, list } from 'nexus'

export const OpportunityStageNameAggregateQuery = queryField(
  'aggregateOpportunityStageName',
  {
    type: 'AggregateOpportunityStageName',
    args: {
      where: 'OpportunityStageNameWhereInput',
      orderBy: list('OpportunityStageNameOrderByInput'),
      cursor: 'OpportunityStageNameWhereUniqueInput',
      distinct: 'OpportunityStageNameScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityStageName.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
