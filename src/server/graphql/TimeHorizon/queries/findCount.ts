import { queryField, nonNull, list } from 'nexus'

export const TimeHorizonFindCountQuery = queryField(
  'findManyTimeHorizonCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'TimeHorizonWhereInput',
      orderBy: list('TimeHorizonOrderByInput'),
      cursor: 'TimeHorizonWhereUniqueInput',
      distinct: 'TimeHorizonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.timeHorizon.count(args as any)
    },
  },
)
