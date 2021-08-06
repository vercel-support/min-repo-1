import { queryField, nonNull } from 'nexus'

export const LifeEventFindUniqueQuery = queryField('findUniqueLifeEvent', {
  type: 'LifeEvent',
  args: {
    where: nonNull('LifeEventWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.lifeEvent.findUnique({
      where,
      ...select,
    })
  },
})
