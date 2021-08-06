import { queryField, list } from 'nexus'

export const OpportunityAggregateQuery = queryField('aggregateOpportunity', {
  type: 'AggregateOpportunity',
  args: {
    where: 'OpportunityWhereInput',
    orderBy: list('OpportunityOrderByInput'),
    cursor: 'OpportunityWhereUniqueInput',
    distinct: 'OpportunityScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.opportunity.aggregate({ ...args, ...select }) as any
  },
})
