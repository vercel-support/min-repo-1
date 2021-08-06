import { queryField, list } from 'nexus'

export const LeadSourceAggregateQuery = queryField('aggregateLeadSource', {
  type: 'AggregateLeadSource',
  args: {
    where: 'LeadSourceWhereInput',
    orderBy: list('LeadSourceOrderByInput'),
    cursor: 'LeadSourceWhereUniqueInput',
    distinct: 'LeadSourceScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leadSource.aggregate({ ...args, ...select }) as any
  },
})
