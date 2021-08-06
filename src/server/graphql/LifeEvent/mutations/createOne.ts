import { mutationField, nonNull } from 'nexus'

export const LifeEventCreateOneMutation = mutationField('createOneLifeEvent', {
  type: nonNull('LifeEvent'),
  args: {
    data: nonNull('LifeEventCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.lifeEvent.create({
      data,
      ...select,
    })
  },
})
