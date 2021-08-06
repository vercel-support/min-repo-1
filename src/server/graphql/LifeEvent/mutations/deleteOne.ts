import { mutationField, nonNull } from 'nexus'

export const LifeEventDeleteOneMutation = mutationField('deleteOneLifeEvent', {
  type: 'LifeEvent',
  args: {
    where: nonNull('LifeEventWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.lifeEvent.delete({
      where,
      ...select,
    })
  },
})
