import { queryField, list } from 'nexus'

export const StatusAggregateQuery = queryField('aggregateStatus', {
  type: 'AggregateStatus',
  args: {
    where: 'StatusWhereInput',
    orderBy: list('StatusOrderByInput'),
    cursor: 'StatusWhereUniqueInput',
    distinct: 'StatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.status.aggregate({ ...args, ...select }) as any
  },
})
