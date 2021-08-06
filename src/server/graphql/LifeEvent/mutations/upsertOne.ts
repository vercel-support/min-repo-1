import { mutationField, nonNull } from 'nexus'

export const LifeEventUpsertOneMutation = mutationField('upsertOneLifeEvent', {
  type: nonNull('LifeEvent'),
  args: {
    where: nonNull('LifeEventWhereUniqueInput'),
    create: nonNull('LifeEventCreateInput'),
    update: nonNull('LifeEventUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.lifeEvent.upsert({
      ...args,
      ...select,
    })
  },
})
