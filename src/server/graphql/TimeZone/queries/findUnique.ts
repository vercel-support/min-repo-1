import { queryField, nonNull } from 'nexus'

export const TimeZoneFindUniqueQuery = queryField('findUniqueTimeZone', {
  type: 'TimeZone',
  args: {
    where: nonNull('TimeZoneWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.timeZone.findUnique({
      where,
      ...select,
    })
  },
})
