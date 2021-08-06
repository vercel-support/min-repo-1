import { queryField, nonNull, list } from 'nexus'

export const TimeHorizonFindManyQuery = queryField('findManyTimeHorizon', {
  type: nonNull(list(nonNull('TimeHorizon'))),
  args: {
    where: 'TimeHorizonWhereInput',
    orderBy: list('TimeHorizonOrderByInput'),
    cursor: 'TimeHorizonWhereUniqueInput',
    distinct: 'TimeHorizonScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeHorizon.findMany({
      ...args,
      ...select,
    })
  },
})
