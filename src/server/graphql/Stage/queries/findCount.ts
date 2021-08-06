import { queryField, nonNull, list } from 'nexus'

export const StageFindCountQuery = queryField('findManyStageCount', {
  type: nonNull('Int'),
  args: {
    where: 'StageWhereInput',
    orderBy: list('StageOrderByInput'),
    cursor: 'StageWhereUniqueInput',
    distinct: 'StageScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stage.count(args as any)
  },
})
