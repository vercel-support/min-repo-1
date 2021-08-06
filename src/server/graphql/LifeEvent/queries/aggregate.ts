import { queryField, list } from 'nexus'

export const LifeEventAggregateQuery = queryField('aggregateLifeEvent', {
  type: 'AggregateLifeEvent',
  args: {
    where: 'LifeEventWhereInput',
    orderBy: list('LifeEventOrderByInput'),
    cursor: 'LifeEventWhereUniqueInput',
    distinct: 'LifeEventScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.lifeEvent.aggregate({ ...args, ...select }) as any
  },
})
