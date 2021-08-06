import { mutationField, nonNull } from 'nexus'

export const OperatingHoursCreateOneMutation = mutationField(
  'createOneOperatingHours',
  {
    type: nonNull('OperatingHours'),
    args: {
      data: nonNull('OperatingHoursCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.operatingHours.create({
        data,
        ...select,
      })
    },
  },
)
