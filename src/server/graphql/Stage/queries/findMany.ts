import { queryField, nonNull, list } from 'nexus'

export const StageFindManyQuery = queryField('findManyStage', {
  type: nonNull(list(nonNull('Stage'))),
  args: {
    where: 'StageWhereInput',
    orderBy: list('StageOrderByInput'),
    cursor: 'StageWhereUniqueInput',
    distinct: 'StageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stage.findMany({
      ...args,
      ...select,
    })
  },
})
