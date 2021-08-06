import { mutationField, nonNull } from 'nexus'

export const StatusCreateOneMutation = mutationField('createOneStatus', {
  type: nonNull('Status'),
  args: {
    data: nonNull('StatusCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.status.create({
      data,
      ...select,
    })
  },
})
