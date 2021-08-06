import { mutationField, nonNull } from 'nexus'

export const StatusUpdateOneMutation = mutationField('updateOneStatus', {
  type: nonNull('Status'),
  args: {
    where: nonNull('StatusWhereUniqueInput'),
    data: nonNull('StatusUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.status.update({
      where,
      data,
      ...select,
    })
  },
})
