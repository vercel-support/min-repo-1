import { queryField, nonNull } from 'nexus'

export const TimeHorizonFindUniqueQuery = queryField('findUniqueTimeHorizon', {
  type: 'TimeHorizon',
  args: {
    where: nonNull('TimeHorizonWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.timeHorizon.findUnique({
      where,
      ...select,
    })
  },
})
