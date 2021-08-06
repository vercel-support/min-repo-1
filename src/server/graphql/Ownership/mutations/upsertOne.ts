import { mutationField, nonNull } from 'nexus'

export const OwnershipUpsertOneMutation = mutationField('upsertOneOwnership', {
  type: nonNull('Ownership'),
  args: {
    where: nonNull('OwnershipWhereUniqueInput'),
    create: nonNull('OwnershipCreateInput'),
    update: nonNull('OwnershipUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.ownership.upsert({
      ...args,
      ...select,
    })
  },
})
