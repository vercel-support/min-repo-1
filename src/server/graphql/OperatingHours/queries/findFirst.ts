import { queryField, list } from 'nexus'

export const OperatingHoursFindFirstQuery = queryField(
  'findFirstOperatingHours',
  {
    type: 'OperatingHours',
    args: {
      where: 'OperatingHoursWhereInput',
      orderBy: list('OperatingHoursOrderByInput'),
      cursor: 'OperatingHoursWhereUniqueInput',
      distinct: 'OperatingHoursScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.operatingHours.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
