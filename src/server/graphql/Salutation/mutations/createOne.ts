import { mutationField, nonNull } from 'nexus'

export const SalutationCreateOneMutation = mutationField(
  'createOneSalutation',
  {
    type: nonNull('Salutation'),
    args: {
      data: nonNull('SalutationCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.salutation.create({
        data,
        ...select,
      })
    },
  },
)
