import { queryField, list } from 'nexus'

export const TimeHorizonFindFirstQuery = queryField('findFirstTimeHorizon', {
  type: 'TimeHorizon',
  args: {
    where: 'TimeHorizonWhereInput',
    orderBy: list('TimeHorizonOrderByInput'),
    cursor: 'TimeHorizonWhereUniqueInput',
    distinct: 'TimeHorizonScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeHorizon.findFirst({
      ...args,
      ...select,
    })
  },
})
