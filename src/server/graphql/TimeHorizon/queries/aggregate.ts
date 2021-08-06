import { queryField, list } from 'nexus'

export const TimeHorizonAggregateQuery = queryField('aggregateTimeHorizon', {
  type: 'AggregateTimeHorizon',
  args: {
    where: 'TimeHorizonWhereInput',
    orderBy: list('TimeHorizonOrderByInput'),
    cursor: 'TimeHorizonWhereUniqueInput',
    distinct: 'TimeHorizonScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeHorizon.aggregate({ ...args, ...select }) as any
  },
})
