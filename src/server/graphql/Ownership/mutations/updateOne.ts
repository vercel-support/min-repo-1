import { mutationField, nonNull } from 'nexus'

export const OwnershipUpdateOneMutation = mutationField('updateOneOwnership', {
  type: nonNull('Ownership'),
  args: {
    where: nonNull('OwnershipWhereUniqueInput'),
    data: nonNull('OwnershipUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.ownership.update({
      where,
      data,
      ...select,
    })
  },
})
