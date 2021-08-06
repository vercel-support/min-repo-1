import { queryField, nonNull, list } from 'nexus'

export const TimeZoneFindManyQuery = queryField('findManyTimeZone', {
  type: nonNull(list(nonNull('TimeZone'))),
  args: {
    where: 'TimeZoneWhereInput',
    orderBy: list('TimeZoneOrderByInput'),
    cursor: 'TimeZoneWhereUniqueInput',
    distinct: 'TimeZoneScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeZone.findMany({
      ...args,
      ...select,
    })
  },
})
