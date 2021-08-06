import { queryField, list } from 'nexus'

export const OpportunityTypeAggregateQuery = queryField(
  'aggregateOpportunityType',
  {
    type: 'AggregateOpportunityType',
    args: {
      where: 'OpportunityTypeWhereInput',
      orderBy: list('OpportunityTypeOrderByInput'),
      cursor: 'OpportunityTypeWhereUniqueInput',
      distinct: 'OpportunityTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityType.aggregate({ ...args, ...select }) as any
    },
  },
)
