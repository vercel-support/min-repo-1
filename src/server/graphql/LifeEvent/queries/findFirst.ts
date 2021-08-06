import { queryField, list } from 'nexus'

export const LifeEventFindFirstQuery = queryField('findFirstLifeEvent', {
  type: 'LifeEvent',
  args: {
    where: 'LifeEventWhereInput',
    orderBy: list('LifeEventOrderByInput'),
    cursor: 'LifeEventWhereUniqueInput',
    distinct: 'LifeEventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.lifeEvent.findFirst({
      ...args,
      ...select,
    })
  },
})
