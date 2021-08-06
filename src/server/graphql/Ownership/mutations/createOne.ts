import { mutationField, nonNull } from 'nexus'

export const OwnershipCreateOneMutation = mutationField('createOneOwnership', {
  type: nonNull('Ownership'),
  args: {
    data: nonNull('OwnershipCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.ownership.create({
      data,
      ...select,
    })
  },
})
