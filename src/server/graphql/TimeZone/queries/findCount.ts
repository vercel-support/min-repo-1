import { queryField, nonNull, list } from 'nexus'

export const TimeZoneFindCountQuery = queryField('findManyTimeZoneCount', {
  type: nonNull('Int'),
  args: {
    where: 'TimeZoneWhereInput',
    orderBy: list('TimeZoneOrderByInput'),
    cursor: 'TimeZoneWhereUniqueInput',
    distinct: 'TimeZoneScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.timeZone.count(args as any)
  },
})
