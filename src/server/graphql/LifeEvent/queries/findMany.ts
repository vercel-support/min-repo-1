import { queryField, nonNull, list } from 'nexus'

export const LifeEventFindManyQuery = queryField('findManyLifeEvent', {
  type: nonNull(list(nonNull('LifeEvent'))),
  args: {
    where: 'LifeEventWhereInput',
    orderBy: list('LifeEventOrderByInput'),
    cursor: 'LifeEventWhereUniqueInput',
    distinct: 'LifeEventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.lifeEvent.findMany({
      ...args,
      ...select,
    })
  },
})
