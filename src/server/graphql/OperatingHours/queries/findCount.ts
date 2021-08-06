import { queryField, nonNull, list } from 'nexus'

export const OperatingHoursFindCountQuery = queryField(
  'findManyOperatingHoursCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OperatingHoursWhereInput',
      orderBy: list('OperatingHoursOrderByInput'),
      cursor: 'OperatingHoursWhereUniqueInput',
      distinct: 'OperatingHoursScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.operatingHours.count(args as any)
    },
  },
)
