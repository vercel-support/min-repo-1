import { queryField, nonNull, list } from 'nexus'

export const OperatingHoursFindManyQuery = queryField(
  'findManyOperatingHours',
  {
    type: nonNull(list(nonNull('OperatingHours'))),
    args: {
      where: 'OperatingHoursWhereInput',
      orderBy: list('OperatingHoursOrderByInput'),
      cursor: 'OperatingHoursWhereUniqueInput',
      distinct: 'OperatingHoursScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.operatingHours.findMany({
        ...args,
        ...select,
      })
    },
  },
)
