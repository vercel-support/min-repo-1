import { queryField, list } from 'nexus'

export const OperatingHoursAggregateQuery = queryField(
  'aggregateOperatingHours',
  {
    type: 'AggregateOperatingHours',
    args: {
      where: 'OperatingHoursWhereInput',
      orderBy: list('OperatingHoursOrderByInput'),
      cursor: 'OperatingHoursWhereUniqueInput',
      distinct: 'OperatingHoursScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.operatingHours.aggregate({ ...args, ...select }) as any
    },
  },
)
