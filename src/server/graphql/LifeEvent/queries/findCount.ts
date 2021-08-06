import { queryField, nonNull, list } from 'nexus'

export const LifeEventFindCountQuery = queryField('findManyLifeEventCount', {
  type: nonNull('Int'),
  args: {
    where: 'LifeEventWhereInput',
    orderBy: list('LifeEventOrderByInput'),
    cursor: 'LifeEventWhereUniqueInput',
    distinct: 'LifeEventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.lifeEvent.count(args as any)
  },
})
