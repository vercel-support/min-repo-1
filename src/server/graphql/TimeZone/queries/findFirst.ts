import { queryField, list } from 'nexus'

export const TimeZoneFindFirstQuery = queryField('findFirstTimeZone', {
  type: 'TimeZone',
  args: {
    where: 'TimeZoneWhereInput',
    orderBy: list('TimeZoneOrderByInput'),
    cursor: 'TimeZoneWhereUniqueInput',
    distinct: 'TimeZoneScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeZone.findFirst({
      ...args,
      ...select,
    })
  },
})
