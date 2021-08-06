import { mutationField, nonNull } from 'nexus'

export const StatusUpsertOneMutation = mutationField('upsertOneStatus', {
  type: nonNull('Status'),
  args: {
    where: nonNull('StatusWhereUniqueInput'),
    create: nonNull('StatusCreateInput'),
    update: nonNull('StatusUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.status.upsert({
      ...args,
      ...select,
    })
  },
})
