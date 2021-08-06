import { queryField, list } from 'nexus'

export const StageFindFirstQuery = queryField('findFirstStage', {
  type: 'Stage',
  args: {
    where: 'StageWhereInput',
    orderBy: list('StageOrderByInput'),
    cursor: 'StageWhereUniqueInput',
    distinct: 'StageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stage.findFirst({
      ...args,
      ...select,
    })
  },
})
