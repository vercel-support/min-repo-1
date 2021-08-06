import { queryField, list } from 'nexus'

export const StageAggregateQuery = queryField('aggregateStage', {
  type: 'AggregateStage',
  args: {
    where: 'StageWhereInput',
    orderBy: list('StageOrderByInput'),
    cursor: 'StageWhereUniqueInput',
    distinct: 'StageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stage.aggregate({ ...args, ...select }) as any
  },
})
