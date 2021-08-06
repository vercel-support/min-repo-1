import { mutationField, nonNull } from 'nexus'

export const MaritalStatusCreateOneMutation = mutationField(
  'createOneMaritalStatus',
  {
    type: nonNull('MaritalStatus'),
    args: {
      data: nonNull('MaritalStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.maritalStatus.create({
        data,
        ...select,
      })
    },
  },
)
