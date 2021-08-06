import { mutationField, nonNull } from 'nexus'

export const LifeEventUpdateOneMutation = mutationField('updateOneLifeEvent', {
  type: nonNull('LifeEvent'),
  args: {
    where: nonNull('LifeEventWhereUniqueInput'),
    data: nonNull('LifeEventUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.lifeEvent.update({
      where,
      data,
      ...select,
    })
  },
})
