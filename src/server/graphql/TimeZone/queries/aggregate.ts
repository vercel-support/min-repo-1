import { queryField, list } from 'nexus'

export const TimeZoneAggregateQuery = queryField('aggregateTimeZone', {
  type: 'AggregateTimeZone',
  args: {
    where: 'TimeZoneWhereInput',
    orderBy: list('TimeZoneOrderByInput'),
    cursor: 'TimeZoneWhereUniqueInput',
    distinct: 'TimeZoneScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeZone.aggregate({ ...args, ...select }) as any
  },
})
